import React, { Component } from 'react';

import PersonalInfo from "./PersonalInfo"
import Image from './Image';

import imageLviv from "../assets/img/image.png";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [{ id: 0, src: imageLviv, width: 500 }],
            initialWidth: 500,
            clicks: [true, true]
        }
    }

    handleAdd = () => {
        this.setState(prevState => ({
            images: [...prevState.images, { id: prevState.images.length, width: prevState.initialWidth }]
        }));
    };

    handleDelete = () => {
        this.setState(prevState => {
            const newImages = [...prevState.images];
            newImages.pop();
            return { images: newImages };
        });
    };

    updateImageWidth = (index, factor) => {
        this.setState(prevState => {
            const newImages = [...prevState.images];
            const newWidth = newImages[index].width * factor;

            if (newWidth <= prevState.initialWidth * 3 && newWidth >= prevState.initialWidth / 3) {
                newImages[index].width = newWidth;
            }

            return { images: newImages };
        });
    };

    handleColorChange = (index) => {
        this.setState(prevState => {
            const newClicks = [...prevState.clicks];
            newClicks[index] = !newClicks[index];
            return { clicks: newClicks };
        });
    };

    render() {
        return (
            <div>
                <PersonalInfo clicks={this.state.clicks} handleColorChange={this.handleColorChange} /> 
                {this.state.images.map((image) => (
                    <Image
                        key={image.id}
                        src={imageLviv}
                        alt="Фото Львів"
                        width={`${image.width}px`}
                    />
                ))}
                <div id="btn-container">
                    <button onClick={this.handleAdd} id='btnAdd'>
                            Додати
                    </button>
                    <button onClick={() => this.updateImageWidth(this.state.images.length - 1, 1.2)} id='btnIncrease'>
                        Збільшити
                    </button>
                    <button onClick={() => this.updateImageWidth(this.state.images.length - 1, 0.75)} id='btnReduce'>
                        Зменшити
                    </button>
                    <button onClick={this.handleDelete} id='btnDelete'>
                        Видалити
                    </button>
                </div>
            </div>
        );
    }
}

export default Content;