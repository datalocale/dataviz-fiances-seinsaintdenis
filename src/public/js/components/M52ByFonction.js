import { List } from 'immutable';

import React from 'react';
import page from 'page';

import M52Viz from '../../../shared/js/components/M52Viz';
import LegendList from '../../../shared/js/components/LegendList';

import {hierarchicalM52} from '../../../shared/js/finance/memoized';
import {DF, DI} from '../../../shared/js/finance/constants';

const STATE_DF = {rdfi: DF};
const STATE_DI = {rdfi: DI};

/*
interface M52ByFonctionProps{
    
}
 */


function stripAllButFirstLevel(root){
    const children = []
    root.children.forEach(c => children.push(c));

    return Object.assign(
        {},
        root,
        {
            children: new Set(children.map(c => {
                const copy = Object.assign({}, c);
                delete copy.children;

                return copy;
            }))
        }

    )
}

export default class M52ByFonction extends React.Component {
    constructor(){
        super();
        this.state = STATE_DF;
    }

    render() {
        const { m52Instruction, urlByFonction, labelsById } = this.props;
        const {rdfi} = this.state;

        const m52Hierarchical = m52Instruction ? stripAllButFirstLevel(hierarchicalM52(m52Instruction, rdfi)) : undefined;

        console.log('m52Hierarchical', m52Hierarchical);

        return React.createElement('div', { className: 'm52-by-fonction' },
            React.createElement(M52Viz, {
                onSliceSelected: e => {
                    if(e){
                        page(urlByFonction[e.id])
                    }
                },
                M52Hierarchical: m52Hierarchical,
                donutWidth: 130,
                outerRadius: 240
            }),
            React.createElement('div', {},
                React.createElement('p', {}, `La norme M52 est la norme comptable sous laquelle tous les Départements de France doivent fournir leurs comptes.`),
                React.createElement('div', { className: 'display-choice' }, 
                    React.createElement('div', {}, `Afficher les dépenses `),
                    React.createElement('div', { className: 'radio'}, 
                        React.createElement('button', {
                            className: rdfi === DF ? 'selected' : '',
                            onClick: () => { this.setState(STATE_DF) }
                        }, `de fonctionnement`), 
                        React.createElement('button', {
                            className: rdfi === DI ? 'selected' : '',
                            onClick: () => { this.setState(STATE_DI) }
                        }, `d'investissement`)
                    )
                ),

                React.createElement(LegendList, {items: new List(m52Hierarchical.children)
                    .sort((c1, c2) => c2.total - c1.total)
                    .map((e) => ({
                        url: urlByFonction[e.id], 
                        text: `${labelsById.get(e.id)} (${(100*e.total/m52Hierarchical.total).toFixed(1)}%)`, 
                        colorClassName: `${e.id}`
                    }))
                })
            )
        )
    }
}