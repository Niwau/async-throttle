const delays = [...Array(50)].map(() => Math.floor(Math.random() * 900) + 100);

const load = delays.map(
    (delay) => (): Promise<number> =>
        new Promise((resolve) => {
            setTimeout(() => resolve(Math.floor(delay / 100)), delay);
        })
);

type Task = () => Promise<number>;

const throttle = async (workers: number, tasks: Task[]) => {
    const answers: number[] = [];
    for (let i = 0; i < tasks.length; i += workers) {
        const results = await Promise.all(
            tasks.slice(i, i + workers).map((task) => task())
        );
        answers.push(...results);
    }
    return answers;
};

const bootstrap = async () => {
    console.log("Starting...");
    const start = Date.now();
    const answers = await throttle(5, load);
    console.log("Done in %dms", Date.now() - start);
    console.log("Answers: %O", answers);
};

bootstrap().catch((err) => {
    console.log("General fail: %O", err);
});
