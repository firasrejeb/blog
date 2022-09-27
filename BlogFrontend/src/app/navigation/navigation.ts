import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'blog',
                title    : 'Blog',
                translate: 'Blog',
                type     : 'item',
                icon     : 'email',
                url      : '/blog/blog',
            },
        ]
    }
];
