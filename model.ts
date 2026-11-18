// A status can only ever be one of these three exact strings.
type TaskStatus = "todo" | "in-progress" | "done";
// Every Task must have this exact shape.
interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}
let nextId = 1;
function addTask(tasks: Task[], title: string): Task[] {
    const newTask: Task = {
        id: nextId++,
        title,
        status: "todo"
    };

    return [...tasks, newTask];
}
function completeTask(tasks: Task[], id: number): Task[] {
    return tasks.map((t) =>
        t.id === id ? { ...t, status: "done" } : t
    );
}
function filterByStatus(
    tasks: Task[],
    status: TaskStatus
): Task[] {
    return tasks.filter((t) => t.status === status);
}

