import heading from './heading-component';
import list from './shopping-list.component';

console.log("My wee spa...");
// wait until the window object has fully loaded; this event
// will fire when the document has been fully rendered. The 
// practical upshot is that you don't need your <script>
// tag at the end.
onload = () => {
    document.body.appendChild(heading);
    document.body.appendChild(list);
}

