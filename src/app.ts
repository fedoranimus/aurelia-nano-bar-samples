export class App {
    isLoading: boolean = true;
    progress: number | null = null;

    start() {
        this.isLoading = true;
    }

    stop() {
        this.isLoading = false;
    }

    setProgress() {
        this.progress = 40;
    }

    clearProgress() {
        this.progress = null;
    }
}

//TODO: Make the style look nicer