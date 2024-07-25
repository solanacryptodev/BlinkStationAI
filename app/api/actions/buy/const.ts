export interface AssetMetadata {
    name: string;
    param: string;
    image: string;
    mint: string;
}

export const ATLAS: string = 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx';

export const assets: AssetMetadata[] = [
    {
        name: 'Pearce X4',
        param: 'pearcex4',
        image: 'https://shdw-drive.genesysgo.net/6CKtcXBouZ4mGAt4NzNcdW29rZCBMx3CTZtBn3zGmz6z/pearceX4.png',
        mint: '2iMhgB4pbdKvwJHVyitpvX5z1NBNypFonUgaSAt9dtDt',
    },
    {
        name: 'Pearce X5',
        param: 'pearcex5',
        image: '',
        mint: ''
    },
    {
        name: 'Pearce R8',
        param: 'pearcer8',
        image: '',
        mint: ''
    },
    {
        name: 'Calico ATS Enforcer',
        param: 'calicoatsenforcer',
        image: '',
        mint: ''
    },
    {
        name: 'Calico Maxhog',
        param: 'calicomaxhog',
        image: 'https://shdw-drive.genesysgo.net/6CKtcXBouZ4mGAt4NzNcdW29rZCBMx3CTZtBn3zGmz6z/calicomaxhog%20(1).png',
        mint: 'GxpbUDxYYvxiUejHcAMzeV2rzdHf6KZZvT86ACrpFgXa',
    }
]
