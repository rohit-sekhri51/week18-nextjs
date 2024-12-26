import axios from "axios"

async function getBlogs() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data
}

export default async function blogs() {

    const blogs = await getBlogs();

    await new Promise(r => setInterval(r,5000));    // wait for 5 sec while axios getBlogs fetched.

    return <div>
        {blogs.map((x: ITodo) => <Todo key={x.title} title={x.title} completed={x.completed} />)}
    </div>
}

interface ITodo {
    title: string,
    completed: string
}

function Todo({title,completed}: ITodo) {
    return <div>
        {title} {completed ? "done" : "false"}
    </div>
}