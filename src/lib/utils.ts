export function isElementInViewport(element:HTMLDivElement | null) {
    if(! element){
        return false
    }
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 
);
}

