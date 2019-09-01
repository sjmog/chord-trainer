import React from 'react';
import ConfigureVariant from './ConfigureVariant';

function ConfigureVariants(props) {
    const POSSIBLE_VARIANTS = [
    "",
    "^6",
    "^6/9",
    "ma^7",
    "ma^9",
    "ma^13",
    "^7",
    "^9",
    "^13",
    "mi",
    "mi^6",
    "mi^6/9",
    "mi^7",
    "mi^9",
    "mi^11"
  ]

  const isActive = (variant) => {
    return props.variants.includes(variant);
  }

  const unique = (array) => {
    return [...new Set(array)]
  }

  const toggleVariant = (variant) => {
    let newVariants

    if(isActive(variant)) {
      newVariants = unique(props.variants.filter(existingVariant => existingVariant !== variant))
    } else {
      newVariants = unique(props.variants.concat([variant]))
    }

    props.setVariants(newVariants)
  }

  return(
    <div className="ConfigureVariants">
    {
      POSSIBLE_VARIANTS
       .map(variant => <ConfigureVariant 
                     variant={variant}
                     active={isActive(variant)} 
                     key={variant}
                     onClick={toggleVariant} />)
    }
    </div>
  );
}

export default ConfigureVariants