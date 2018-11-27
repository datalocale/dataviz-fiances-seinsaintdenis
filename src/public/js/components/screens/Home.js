import { Map as ImmutableMap } from 'immutable';

import React from 'react';
import { connect } from 'react-redux';

import Markdown from '../../../../shared/js/components/Markdown';
import PageTitle from '../../../../shared/js/components/gironde.fr/PageTitle';

import TotalAppetizer from '../TotalAppetizer';
import Appetizer from '../Appetizer';

import { flattenTree } from '../../../../shared/js/finance/visitHierarchical.js';
import { m52ToAggregated, hierarchicalAggregated } from '../../../../shared/js/finance/memoized';

import { SOLIDARITES, INVEST, PRESENCE } from '../../constants/pages';
import { EXPENDITURES } from '../../../../shared/js/finance/constants';


export function Home({
    expenditures,
    currentYear,
    urls: {
        explore,
        solidarity, invest, presence
    }
}) {

    return React.createElement('article', { className: 'home' },
        React.createElement('div', {},
            React.createElement(PageTitle, { text: "Un budget au département de la Seine Saint Denis" }),
            React.createElement(Markdown, {}, `Ici on peut dire des choses.`)
        )
    );
}


export default connect(
    state => {
        const { docBudgByYear, corrections, currentYear } = state;
        const m52Instruction = docBudgByYear.get(currentYear);

        const aggregated = m52Instruction && corrections && m52ToAggregated(m52Instruction, corrections);
        const hierAgg = m52Instruction && hierarchicalAggregated(aggregated);

        let elementById = new ImmutableMap();

        if (m52Instruction) {
            flattenTree(hierAgg).forEach(aggHierNode => {
                elementById = elementById.set(aggHierNode.id, aggHierNode);
            });
        }

        const totalById = elementById.map(e => e.total);

        return {
            currentYear,
            urls: {
                explore: '#!/explorer',
                solidarity: '#!/focus/' + SOLIDARITES,
                invest: '#!/focus/' + INVEST,
                presence: '#!/focus/' + PRESENCE
            },
            expenditures: totalById.get(EXPENDITURES)
        }


    },
    () => ({})
)(Home);
