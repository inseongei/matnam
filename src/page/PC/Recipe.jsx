import React from "react";
import { PC, Mobile } from "../../responsive";
import PrecipOne from "../../component/PC/Precipe/PrecipeOne";
import MRecipeOne from "../../component/Mobile/MRecipe/MRecipeOne";
import MRecipeTwo from "../../component/Mobile/MRecipe/MRecipeTwo";

export default function Recipe() {
  return (
    <div>
      <PC>
        <PrecipOne />
      </PC>
      <Mobile>
        <MRecipeOne />
        <MRecipeTwo />
      </Mobile>
    </div>
  );
}
