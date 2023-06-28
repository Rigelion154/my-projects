import { DataItem } from '../types';

export const data: DataItem[] = [
    {
        id: 1,
        doThis: 'Select the boxes',
        selector: `box`,
        syntax: 'Example A',
        helpTitle: 'Select elements by their type',
        selectorName: 'Type Selector',
        help:
            'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, ' +
            '<tag>p</tag> and <tag>ul</tag> are all different element types.',
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `<box class="task">< box /></box><box class="task">< box/ ></box>`,
    },
    {
        id: 2,
        doThis: 'Select the ammo-boxes',
        selector: 'ammo-box',
        syntax: 'Example A',
        helpTitle: 'Select elements by their type',
        selectorName: 'Type Selector',
        help:
            'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, ' +
            '<tag>p</tag> and <tag>ul</tag> are all different element types.',
        examples: [
            '<strong>div</strong> selects all <tag>div</tag> elements.',
            '<strong>p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `<ammo-box class="task">< ammo-box /></ammo-box><box>< box /></box><ammo-box class="task">< ammo-box /></ammo-box>`,
    },
    {
        id: 3,
        doThis: 'Select the ammo-box with magazines',
        // selector: `<plate id="fancy">< plate id="fancy" /></plate>`,
        selector: `#magazines`,
        selectorName: 'ID Selector',
        helpTitle: 'Select elements with an ID',
        syntax: 'Example #id',
        help:
            'Selects the element with a specific <strong>id</strong>. ' +
            'You can also combine the ID selector with the type selector.',
        examples: [
            '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
            '<strong>ul#long</strong> selects <tag>ul id="long"</tag>',
        ],
        boardMarkup: `<ammo-box class="task" id="magazines">< ammo-box id="magazines" /></ammo-box><ammo-box>< ammo-box /></ammo-box><box>< box /></box>`,
    },
    {
        id: 4,
        helpTitle: 'Select an element inside another element',
        selectorName: 'Descendant Selector',
        doThis: 'Select the gun in a ammo-box',
        // selector: '<apple class="apple">< apple /></apple>',
        selector: 'ammo-box gun',
        syntax: 'Example A&nbsp;&nbsp;B',
        help:
            'Selects all <strong>B</strong> inside of <strong>A</strong>. ' +
            '<strong>B</strong> is called a descendant because it is inside of another element.',
        examples: [
            '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
            '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
        ],
        boardMarkup: `
             <box class="box">< box /></box>
             <ammo-box class="ammo-box">
             < ammo-box >
                <gun class="gun task">< gun /></gun>
             < /ammo-box >
            </ammo-box>
            <gun>< gun /></gun>
    `,
    },
    {
        id: 5,
        doThis: 'Pick the gun in the box of magazines',
        selector: '#magazines gun',
        helpTitle: 'Combine the Descendant & ID Selectors',
        syntax: 'Example #id&nbsp;&nbsp;A',
        help: 'You can combine any selector with the descendent selector.',
        examples: [
            '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag>  elements that are inside of elements with <strong>id="cool"</strong>',
        ],
        boardMarkup: `
    <ammo-box>< ammo-box >
    <orange/>
    </ammo-box>
    <ammo-box id="magazines">
        < ammo-box id="magazines" >
            <gun class="gun task">< gun /></gun>
        < /ammo-box >
    </ammo-box>
    <box>
    < box >
      <gun class="gun">< gun /></gun>
    < /box >
    </box>
    `,
    },
    {
        id: 6,
        doThis: 'Select the shotguns',
        selector: '.shotgun',
        selectorName: 'Class Selector',
        helpTitle: 'Select elements by their class',
        syntax: 'Example .classname',
        help:
            'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
        examples: ['<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],
        boardMarkup: `
    <gun>< gun /></gun>
    <gun class="shotgun task">< gun class="shotgun" /></gun>
    <box>
    < box >
      <gun class="shotgun gun task">< gun class="shotgun" /></gun>
    < /box >
    </box>
    <box>< box /></box>
    `,
    },
    {
        id: 7,
        doThis: 'Select the shotgun ammo',
        selector: 'ammo.shotgun',
        helpTitle: 'Combine the Class Selector',
        syntax: 'Example A.className',
        help: 'You can combine the class selector with other selectors, like the type selector.',
        examples: [
            '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
            '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>',
        ],
        boardMarkup: `
    <gun class="gun">< gun /></gun>
    <gun class="shotgun gun">< gun class="shotgun" /></gun>
    <ammo-box>
    < ammo-box >
      <ammo class="shotgun task">< ammo class="shotgun" /></ammo>
    < /ammo-box >
    </ammo-box>
    <box>
    < box >
     <ammo>< ammo /></ammo>
    < /box >
    </box>
    <box>
    < box >
     <ammo class="shotgun task">< ammo class="shotgun" /></ammo>
    < /box >
    </box>
`,
    },
    {
        id: 8,
        doThis: 'Select the shotgun ammo in the ammo-boxes',
        selector: 'ammo-box ammo.shotgun',
        syntax: 'Put your back into it!',
        helpTitle: 'You can do it...',
        help: 'Combine what you learned in the last few levels to solve this one!',
        examples: [],
        boardMarkup: `
    <ammo-box>
    < ammo-box >
      <ammo>< ammo /></ammo>
    < /ammo-box >
    </ammo-box>
    <ammo class="shotgun">< ammo class="shotgun" /></ammo>
    <ammo-box>
    < ammo-box >
      <ammo class="shotgun task">< ammo class="shotgun" /></ammo>
    < /ammo-box >
    </ammo-box>
    <ammo-box>
    < ammo-box >
      <gun class="shotgun gun">< gun class="shotgun" /></gun>
    < /ammo-box >
    </ammo-box>
    <ammo-box>
    < ammo-box >
      <ammo class="shotgun task">< ammo class="shotgun" /></ammo>
    < /ammo-box >
    </ammo-box>
    `,
    },
    {
        id: 9,
        doThis: 'Select all the boxes and ammo-boxes',
        selector: 'box,ammo-box',
        selectorName: 'Comma Combinator',
        helpTitle: 'Combine, selectors, with... commas!',
        syntax: 'Example A, B',
        help:
            'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
        examples: [
            '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
            '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements',
        ],
        boardMarkup: `
    <ammo class="shotgun">< ammo class="shotgun" /></ammo>
    <ammo>< ammo /></ammo>
    <box class="task">
    < box >
     <ammo>< ammo /></ammo>
    < /box >
    </box>
    <ammo-box class="task">
    < ammo-box >
      <ammo>< ammo /></ammo>
    < /ammo-box >
    </ammo-box>
    <box class="task">
    < box >
     <ammo>< ammo /></ammo>
    < /box >
    </box>
    <ammo>< ammo /></ammo>
    <ammo class="shotgun">< ammo class="shotgun" /></ammo>
    `,
    },
    {
        id: 10,
        doThis: 'Select all the things!',
        selector: '*',
        selectorName: 'The Universal Selector',
        helpTitle: 'You can select everything!',
        syntax: 'Example *',
        help: 'You can select all elements with the universal selector! ',
        examples: ['<strong>p *</strong> selects any element inside all <tag>p</tag> elements.'],
        boardMarkup: `
    <gun class="gun task">< gun /></gun>
    <box class="task">
    < box >
     <ammo>< ammo /></ammo>
    < /box >
    </box>
    <ammo-box class="task">< ammo-box /></ammo-box>
    <ammo-box class="task">
    < ammo-box >
      <ammo class="shotgun">< ammo class="shotgun" /></ammo>
    < /ammo-box >
    </ammo-box>
    <ammo-box class="task" id="magazines">< ammo-box id="magazines" /></ammo-box>
    `,
    },
    // {
    //     id: 11,
    //     doThis: 'Select everything on a plate',
    //     selector: 'plate *',
    //     syntax: 'Example A&nbsp;&nbsp;*',
    //     helpTitle: 'Combine the Universal Selector',
    //     help: 'This selects all elements inside of <strong>A</strong>.',
    //     examples: [
    //         '<strong>p *</strong> selects every element inside all <tag>p</tag> elements.',
    //         '<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.',
    //     ],
    //     boardMarkup: `<div> You Win</div>`,
    // },
];

export const db = [{ selector: 'plato' }, { selector: 'plato', child: [{ selector: 'benito' }] }];
