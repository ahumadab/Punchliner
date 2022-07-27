import React from "react";
import { Text, View } from "react-native";
import { Punchliner } from "../../api/apiResponse";

interface ResponseHistoricProps {
  goodResponses: Punchliner[];
}

const ResponseHistoric: React.FC<ResponseHistoricProps> = ({
  goodResponses,
}) => {
  return (
    <View>
      <Text>Tu as déjà trouvé {goodResponses.length} punchlines :</Text>
      <View>
        {goodResponses.map((goodResponse, index) => (
          <View key={index}>
            <Text>{goodResponse.punchliner}</Text>
            <Text>{goodResponse.song}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ResponseHistoric;
