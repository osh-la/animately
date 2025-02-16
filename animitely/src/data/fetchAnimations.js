

export const fetchAnimations = async (category) => {
    const response = await fetch(`/Animations/${category}.json`);
    const data = await response.json();
    return data.animations;
  };
  