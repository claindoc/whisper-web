function padTime(time: number) {
    return String(time).padStart(2, "0");
}

function padZero(num: number, width: number = 2): string {
    const numStr = num.toString();
    return numStr.length >= width ? numStr : '0'.repeat(width - numStr.length) + numStr;
}

export function formatAudioTimestamp(time: number) {
    const hours = (time / (60 * 60)) | 0;
    time -= hours * (60 * 60);
    const minutes = (time / 60) | 0;
    time -= minutes * 60;
    const seconds = time | 0;
    return `${hours ? padTime(hours) + ":" : ""}${padTime(minutes)}:${padTime(
        seconds,
    )}`;
}

export function formatSRTTimestamp(time: number) {
    const hours = (time / (60 * 60)) | 0;
    time -= hours * (60 * 60);
    const minutes = (time / 60) | 0;
    time -= minutes * 60;
    const seconds = time | 0;
    const milliseconds = time / 1000 | 0;
    return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)},${padZero(milliseconds, 3)}`;
}
