import {imageToBase64} from "./functions";

export const courseDataProvider = (dataProvider) => {
    return {
        ...dataProvider,
        create: (resource, params) => {
            return imageToBase64(
                params.data.preview.rawFile
            ).then((convertedImage) => {
                return dataProvider.create(resource, {
                    data: {
                        ...params.data,
                        preview: convertedImage,
                    },
                    id: params.id,
                })
            });
        },
        update: (resource, params) => {
            return imageToBase64(
                params.data.preview.rawFile
            ).then((convertedImage) => {
                return dataProvider.update(resource, {
                    data: {
                        ...params.data,
                        preview: convertedImage,
                    },
                    id: params.id,
                })
            }).catch(() => {
                const data = params.data;
                delete data.preview;
                return dataProvider.update(resource, {
                    data: data,
                    id: params.id,
                })
            });
        },
    };
}
