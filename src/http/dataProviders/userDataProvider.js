import {imageToBase64} from "./functions";

export const userDataProvider = (dataProvider) => {
    return {
        ...dataProvider,
        create: (resource, params) => {
            return imageToBase64(
                params.data.photo.rawFile
            ).then((convertedImage) => {
                return dataProvider.create(resource, {
                    data: {
                        ...params.data,
                        photo: convertedImage,
                    },
                    id: params.id,
                })
            });
        },
        update: (resource, params) => {
            return imageToBase64(
                params.data.photo.rawFile
            ).then((convertedImage) => {
                return dataProvider.update(resource, {
                    data: {
                        ...params.data,
                        photo: convertedImage,
                    },
                    id: params.id,
                })
            }).catch(() => {
                const data = params.data;
                delete data.photo;
                return dataProvider.update(resource, {
                    data: data,
                    id: params.id,
                })
            });
        },
    };
}
