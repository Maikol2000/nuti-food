import { useEffect, useState } from "react";

const useRecorder = () => {
    const [audioURL, setAudioURL] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState<MediaRecorder | null>(null);

    useEffect(() => {
        // Lazily obtain recorder first time we're recording.
        if (recorder === null) {
            if (isRecording) {
                requestRecorder().then(setRecorder, console.error);
            }
            return;
        }

        // Manage recorder state.
        if (isRecording) {
            console.log(recorder,"recorder")
            recorder.start();
        } else {
            recorder.stop();
        }

        // Obtain the audio when ready.
        const handleData = e => {
            console.log(e);
            setAudioURL(URL.createObjectURL(e.data));
        };

        recorder.addEventListener("dataavailable", handleData);
        return () => recorder.removeEventListener("dataavailable", handleData);
    }, [recorder, isRecording]);

    const start = () => {
        console.log(isRecording,"isRecording")
        if (isRecording) {
            recorder?.resume();
            return;
        }
        setIsRecording(true);
    };

    const pause = () => {
        console.log("pause")
        recorder?.pause();
    };

    const stop = () => {
        setIsRecording(false);
    };

    return {audioURL, isRecording, start, stop, pause};
};

async function requestRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
}
export default useRecorder;
