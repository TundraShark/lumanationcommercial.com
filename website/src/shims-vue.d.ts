declare module "*.vue" {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "@fancyapps/ui/dist/carousel/carousel.esm.js";
declare module "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
