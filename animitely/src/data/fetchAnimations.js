

export const fetchAnimations = async (category) => {
    const response = await fetch(`/animations/${category}.json`);
    const data = await response.json();
    return data.animations;
  };
  