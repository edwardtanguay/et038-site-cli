import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';


const info:string = "nnnnnn";
console.log(info);

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
	<h1>Info Site</h1>
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
`;