import {formatDateToTime, imageToBase64} from "./functions";

export const eventDataProvider = (dataProvider) => {
    return {
        ...dataProvider,
        create: (resource, params) => {
            const record = {
                ...params.data,
                start_time: formatDateToTime(params.data.start_time),
                end_time: formatDateToTime(params.data.end_time),
            }

            return imageToBase64(
                params.data.preview.rawFile
            ).then((convertedImage) => {
                return dataProvider.create(resource, {
                    data: {
                        ...record,
                        preview: convertedImage,
                    },
                    id: params.id,
                })
            });
        },
        update: (resource, params) => {
            const record = {
                ...params.data,
                start_time: formatDateToTime(params.data.start_time),
                end_time: formatDateToTime(params.data.end_time),
            }

            return imageToBase64(
                params.data.preview.rawFile
            ).then((convertedImage) => {
                return dataProvider.update(resource, {
                    data: {
                        ...record,
                        preview: convertedImage,
                    },
                    id: params.id,
                })
            }).catch(() => {
                const data = params.data;
                delete data.preview;
                return dataProvider.update(resource, {
                    data: record,
                    id: params.id,
                })
            });
        },
    };
}
