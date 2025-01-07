   // Custom view handling
   class View {
       constructor() {
           this.elements = {};
       }
       
       dirty(element) {
           console.log(`Element ${element} marked as dirty.`);
           // Logic to update/re-render the element
           this.render(element);
       }
       
       render(element) {
           // Custom render logic for the element
           console.log(`Rendering element: ${element}`);
       }
   }

   const view = new View();
   const subtitle = "Subtitle Element";
   view.dirty(subtitle);
   