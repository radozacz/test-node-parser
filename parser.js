import { renderToStaticMarkup } from 'react-dom/server'
import Home from 'src/pages/index'

console.log("renderToStaticMarkup", renderToStaticMarkup(<Home />));
