import axios from "axios";
import React, { useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import * as Yup from "yup";
import { StyleSheet } from "react-native";
import { PunchlinerResponse, Punchliner } from "../../api/apiResponse";
import { useState } from "react";
import { Formik } from "formik";
import ResponseHistoric from "../ResponseHistoric/ResponseHistoric";
import AsyncStorage from "@react-native-async-storage/async-storage";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerQuestion: {
    backgroundColor: "lightyellow",
    paddingVertical: "5%",
    paddingHorizontal: "10%",
    width: "80%",
    borderRadius: 50,
    alignItems: "center",
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontStyle: "italic",
  },
});

const guessValidationSchema = Yup.object().shape({
  guess: Yup.string().required("Le champ est requis"),
});

interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  const [punchlinerResponse, setPunchlinerResponse] =
    useState<PunchlinerResponse>();
  const [goodResponses, setGoodResponses] = useState<Punchliner[]>([]);

  const callAPI = async () => {
    const { data: punchlinerResponse } = await axios.get<PunchlinerResponse>(
      "https://punchliner.herokuapp.com/punchline"
    );
    setPunchlinerResponse(punchlinerResponse);
  };

  const storeData = async (newGoodReponses: Punchliner[]) => {
    try {
      const str = JSON.stringify(newGoodReponses);
      await AsyncStorage.setItem("goodResponses", str);
    } catch {
      console.log("AsyncStorage error");
    }
  };

  const getStorageData = async () => {
    try {
      const str = await AsyncStorage.getItem("goodResponses");
      if (str) {
        const goodResponses = JSON.parse(str);
        setGoodResponses(goodResponses);
      }
    } catch {
      console.log("AsyncStorage error");
    }
  };

  useEffect(() => {
    callAPI();
    getStorageData();
  }, []);

  const makeAGuess = (guess: string) => {
    punchlinerResponse?.punchliners.forEach((punchliner) => {
      if (punchliner.punchliner === guess) {
        const newGoodReponses = [...goodResponses, punchliner];
        setGoodResponses(newGoodReponses);
        storeData(newGoodReponses);
        callAPI();
      } else {
        console.log("mauvaise réponse");
      }
    });
  };

  return (
    <View>
      <Text>De qui est cette punchline</Text>
      <View style={styles.containerQuestion}>
        <Text style={styles.text}>{punchlinerResponse?.lyrics}</Text>
      </View>
      <Formik
        initialValues={{ guess: "" }}
        onSubmit={(value) => {
          makeAGuess(value.guess);
        }}
        validationSchema={guessValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <Text>Je pense que c'est:</Text>
            <TextInput
              value={values.guess}
              onChangeText={handleChange("guess")}
              onBlur={handleBlur("guess")}
              style={styles.input}
            />
            {errors.guess && <Text>{errors.guess}</Text>}

            <Button
              title="Je passe"
              disabled={!isValid}
              onPress={handleSubmit as any}
            />
          </>
        )}
      </Formik>
      <ResponseHistoric goodResponses={goodResponses} />
    </View>
  );
};

export default Game;
