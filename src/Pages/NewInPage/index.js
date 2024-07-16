import { useEffect } from 'react';
import generalFunction from '../../Utils/generalFunction';
import CollectionBody from '../../components/Collection/CollectionBody';
import CollectionHeader from '../../components/Collection/CollectionHeader';
import { greenImage } from '../../assets/collectionHeader';
import Footer from '../../components/Footer';

function NewInPage() {
    const collectionField = 'status';
    const pageTitle = 'new-in';
    const dataCate = 'collections';
    const itemCategory = 'new in';
    useEffect(() => {
        generalFunction('New in');
    });
    return (
        <div>
            <CollectionHeader Bg_image={greenImage} title={pageTitle} />
            <CollectionBody
                collectionTitle={pageTitle}
                dataCategory={dataCate}
                itemCategory={itemCategory}
                collectionField={collectionField}
            />
            <Footer />
        </div>
    );
}

export default NewInPage;
