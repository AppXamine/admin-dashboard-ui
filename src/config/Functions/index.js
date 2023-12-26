import {
    db,
    doc,
    deleteDoc,
    updateDoc,
    addDoc,
    collection,
    storage, ref, uploadBytesResumable, getDownloadURL
} from "../../config/Firebase/index.js"

const deleteData = async (id) => {
    console.log("text====>", id)
    await deleteDoc(doc(db, "gallary", id));
}

const EditData = async (id, obj) => {
    const washingtonRef = doc(db, "gallary", id);
    await updateDoc(washingtonRef, obj);
}

const AddData = async (obj, dbName) => {
    try {
        const docRef = await addDoc(collection(db, dbName), obj);

        console.log("Document written with ID: ", docRef.id);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const uploadFile = (file, collectionName) => {
    console.log(file)
    return new Promise((resolve, reject) => {
        const mountainsRef = ref(storage, `${collectionName}/${file.name}`);
        const uploadTask = uploadBytesResumable(mountainsRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                console.log(error)
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                    // setImage(downloadURL)
                    console.log("url=>", downloadURL)
                });
            }
        );
    })
}

export {
    deleteData,
    EditData, AddData, uploadFile
}