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
        ),

        React.createElement('section', { className: 'appetizers-container' },
            React.createElement('div', { className: 'appetizers' },

                React.createElement(TotalAppetizer, {
                    total: expenditures, // (May 29th) different than what was hardcoded (1.616*Math.pow(10, 9))
                    year: currentYear,
                    exploreUrl: explore
                }),
                React.createElement(Appetizer, {
                    h1: "Solidarités",
                    numberMain: "120 000",
                    numberSecundary: "prestations allouées",
                    description: `Le Département affirme sa vocation sociale et déploie près de 875 millions d’euros pour aider et accompagner les personnes fragilisées. Il emploie 1 751 agents au service de l’action sociale soit près de 75 millions par an en frais de personnel pour assurer l’efficience et la proximité du service rendu aux publics les plus fragiles.`,
                    moreUrl: solidarity
                }),
                React.createElement(Appetizer, {
                    h1: "Investissements",
                    numberMain: "1 milliard",
                    numberSecundary: "à l’horizon 2020",
                    description: `Avec une moyenne de 200 millions d’euros investis chaque année depuis le début de la mandature, le Département adopte une stratégie volontariste dans une période de réduction budgétaire majeure.`,
                    moreUrl: invest
                }),
                React.createElement(Appetizer, {
                    h1: "Présence sur le territoire",
                    numberMain: "125 métiers",
                    numberSecundary: "425 sites",
                    description: `Puéricultrices, travailleurs sociaux, agents d’exploitation et de voirie, adjoints techniques territoriaux des établissements d’enseignement, juristes… 6 670 agents exercent 125 métiers dans 425 lieux de travail et d’accueil du public. A chaque lieu sont associés des frais de structure (consommation énergétique, éventuellement loyer) gérés dans le cadre de la stratégie patrimoniale départementale. Explorez la carte ci-dessous pour visualiser le détail des frais de fonctionnement.`,
                    moreUrl: presence
                })
            )
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
