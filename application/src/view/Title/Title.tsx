import * as React from 'react';
import {ITitleViewModel} from './types'
import './css/title.css';

export const TitleView: React.FunctionComponent<ITitleViewModel> =
(props: ITitleViewModel) => {
    return (
        <div className="title__container">
            <div className="title__upscore"></div>
            <h1 className="title__title">{props.title}</h1>
        </div>
    );
} 

TitleView.displayName = 'TitleView';
TitleView.defaultProps = {
    title: '..no title..',
}
