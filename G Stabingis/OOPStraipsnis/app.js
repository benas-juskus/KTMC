import {Straipsnis} from './etapas1/Straipsnis.js';
import { multiplePosts } from './etapas2/straipsniai.js';
import { StraipsnisRubrika } from './etapas3/StraipsnisRubrika.js';

let postContent = {
    post_name: 'Etapas1',
    post_header: 'This is the most amazing header ever',
    image: 'https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa ipsum, recusandae explicabo deleniti maiores, numquam voluptate veritatis saepe eius in vitae consequuntur quasi iure. Perspiciatis quidem commodi deleniti inventore.'
}

let etapas1 = document.getElementById('etapas1');
let newPost = new Straipsnis(
    postContent.post_name, 
    postContent.post_header,
    postContent.image,
    postContent.text_content
);

newPost.generuotiStrapsni(etapas1);

let etapas2 = document.getElementById('etapas2');


for (let post of multiplePosts) {
    let postWrapper = document.createElement('div');
    postWrapper.classList.add('post');
    let newPost = new Straipsnis(
        post.post_name,
        post.post_header,
        post.image,
        post.text_content
    )
    newPost.generuotiStrapsni(postWrapper);
    etapas2.appendChild(postWrapper);
};

let etapas3 = document.getElementById('etapas3');

let rubrikaContent = {
    rubrika_name: 'Rubrikos pavadinimas',
    image: 'https://s1.15min.lt/static/cache/OTcweDU4MCw3MTB4NDIxLDYxNjE4OSxvcmlnaW5hbCwsaWQ9NTc0MjQ1NiZkYXRlPTIwMjElMkYwMSUyRjA4LDI1ODgzMTg3Mg==/klaipedos-universitetas-5ff8253a6de66.jpg',
    post_header: 'This, is the most amazing RUBRIKA header ever, dont even think of trying to find a better header.',
    link: 'testlink'
}

let newRubrika = new StraipsnisRubrika(
    rubrikaContent.rubrika_name,
    rubrikaContent.image,
    rubrikaContent.post_header,
    rubrikaContent.link
);

newRubrika.generuotiRubrika(etapas3);