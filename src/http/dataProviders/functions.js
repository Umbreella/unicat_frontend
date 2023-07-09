
export const imageToBase64 = (rawFile) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(rawFile);
    })
}

export const formatDateToTime = (dateStr) => {
    const date = new Date(dateStr);

    if (isNaN(date)) {
        return dateStr
    }

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes}`;
}

export const formatImage = (value) => {
    if (!value || typeof value === "string") {
        return {src: value};
    }

    return value;
}
