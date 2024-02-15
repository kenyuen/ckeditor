// Import the editor
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
// Add these two imports.
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

// rich text
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';

// rest of plugins
import { Alignment } from '@ckeditor/ckeditor5-alignment';  // Importing the package.
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
//import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Heading } from '@ckeditor/ckeditor5-heading';
//import {
//    Image,
//    ImageCaption,
//    ImageStyle,
//    ImageToolbar,
//    ImageUpload
//} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';


// Get the HTML element with the ID of 'app'.
const element = document.querySelector( '#app' );

// Update the call to the `create()` method.
const editor = await ClassicEditor.create( element, {
    plugins: [
            Essentials,
            Paragraph,
            Alignment,  // Adding the package to the list of plugins.
            Autoformat,
            BlockQuote,
        Bold,
        //CloudServices,
        Essentials,
        Heading,
//        Image,
//        //ImageCaption,
//        ImageStyle,
//        ImageToolbar,
//        ImageUpload,
        Indent,
        Italic,
        Link,
        List,
        MediaEmbed,
        Paragraph,
        PasteFromOffice,
        Table,
        TableToolbar,
        TextTransformation,
        SourceEditing
    ],

    // Add the toolbar configuration.
    toolbar: {
        items: [
            'undo',
            'redo',
            'alignment',  // Displaying the proper UI element in the toolbar.
            'heading',
             '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
//                'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'sourceEditing'
        ],
        language: 'en',
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        }
    }
} );

// Add the global `editor` variable (only needed for debugging).
window.editor = editor;



