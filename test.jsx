// Dummy js file for checking the syntax highlighting
// mtk26 -> #d27b53 -> punctuation.section.embedded, variable.interpolation
// mtk19 -> #00bcd4 -> entity.other.attribute-name
// mtk17 -> #20b2aa -> entity.name.tag
// mtk15 -> #c30051 -> string, constant.other.symbol, entity.other.inherited-class
// mtk13 -> #ae51d8 -> storage
// mtk10 -> #a5d851 -> variable
// mtk8 -> #9f47ff -> support.class, entity.name.class, entity.name.type.class
// mtk9 -> #e45100 -> keyword
// mtk7 -> #008ed2 -> keyword.operator

var File = function (url, object) {
    File.list = Array.isArray(File.list) ? File.list : [];
    File.progress = File.progress || 0;
    this.progress = 0;
    this.object = object;
    this.url = url;
};

File.indexOf = function (term) {
    for (var index in File.list) {
        var file = File.list[index];
        if (file.equals(term) || file.url === term || file.object === term) {
            return index;
        }
    }
    return -1;
};

File.find = function (term) {
    var index = File.indexOf(term);
    return ~index && File.list[index];
};

File.prototype.equals = function (file) {
    var isFileType = file instanceof File;
    return isFileType && this.url === file.url && this.object === file.object;
};

File.prototype.save = function (update) {
    update = typeof update === 'undefined' ? true : update;
    if (Array.isArray(File.list)) {
        var index = File.indexOf(this);
        if (~index && update) {
            File.list[index] = this;
            console.warn('File `%s` has been loaded before and updated now for: %O.', this.url, this);
        } else File.list.push(this);
        console.log(File.list);
    } else {
        File.list = [this];
    }
    return this;
};

const example2 = (ex) => (
    <div>
        <h1 class="wow">Heading 1</h1>

        <h2 id="head1">Sub Heading 1</h2>

        <p>
            Lorem, <a href="https://www.lipsum.com/">ipsum</a>
            dolor sit amet consectetur adipisicing elit.
        </p>

        <ul>
            <li>List item 1 ${ex}</li>
            <li class="wow">List item 2</li>
            <li>List item 3</li>
        </ul>

        <img src="images/lorem-ipsum1.jpg" />

        <h2 id="head2">Sub Heading 2</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis molestias{' '}
            <span class="wow">omnis</span> voluptas, consequatur ex cumque velit libero quidem est?
        </p>
    </div>
);

const example = (
    <div>
        <ul>
            <li>List item 1</li>
            <li class="wow">List item 2</li>
            <li>List item 3</li>
        </ul>

        <Bomdia dia="5" />
        <img src="images/lorem-ipsum1.jpg" />

        <h2 id="head2">Sub Heading 2</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis molestias{' '}
            <span class="wow">omnis</span> voluptas, consequatur ex cumque velit libero quidem est?
        </p>
    </div>
);

export const deleteExample = (exampleSelectedId) => {
    try {
        api.delete(`example/${exampleSelectedId}`, {});
    } catch (error) {
        console.error(error);
    }
};

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ListItem, Tooltip, Typography } from '@material-ui/core';

export function CardExample(props) {
    const dispatch = useDispatch();

    const handleExample = () => {
        dispatch(setExampleSelectedId(props.id));
        dispatch(setExampleModalInfo(true));
    };

    return (
        <ListItem className="list-group-item-action hover-show-hide-container d-flex justify-content-between align-items-center py-1 border-0">
            <div className="d-flex align-items-center flex-grow-1">
                <div>
                    <Typography className="ml-2">{props.example}</Typography>
                </div>
            </div>
            <div className="py-1">
                <Tooltip
                    title="Visualizar"
                    classes={{ tooltip: 'tooltip-secondary' }}
                    arrow
                >
                    <Button
                        className="bg-white border-dark d-40 rounded-circle btn-icon btn-animated-icon p-0 ml-1"
                        onClick={handleExample}
                    >
                        <FontAwesomeIcon
                            icon={['fas', 'eye']}
                            className="font-size-md mx-auto"
                        />
                    </Button>
                </Tooltip>

                <Tooltip
                    title="Editar"
                    classes={{ tooltip: 'tooltip-first' }}
                    arrow
                >
                    <Button
                        className="bg-white border-dark text-first d-40 rounded-circle btn-icon btn-animated-icon p-0 ml-1"
                        onClick={handleExample}
                    >
                        <FontAwesomeIcon
                            icon={['fas', 'pen']}
                            className="font-size-md mx-auto"
                        />
                    </Button>
                </Tooltip>

                <Tooltip
                    title="Remover"
                    classes={{ tooltip: 'tooltip-danger' }}
                    arrow
                >
                    <Button
                        className="bg-white border-dark text-danger d-40 rounded-circle btn-icon btn-animated-icon p-0 ml-1"
                        onClick={handleExample}
                    >
                        <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-md mx-auto"
                        />
                    </Button>
                </Tooltip>
            </div>
        </ListItem>
    );
}
