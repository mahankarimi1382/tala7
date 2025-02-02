// Function to move an element on the X axis
const moveElementX = (element, distance, transition = '1.5s ease-in-out') => {
  if (!element) {
      console.error('Element not found');
        return;
      }
  const currentX = parseInt(element.style.transform?.match(/translateX\((-?\d+)px\)/)?.[1] || 0, 10);
  element.style.transition = `transform ${transition}`;
  element.style.transform = `translateX(${currentX + distance}px)`;
};

// Function to be called on load
const moveImageLeft = (event) => {
  const imgElement = event.target;
  moveElementX (20 ,imgElement)
};

export default moveImageLeft;