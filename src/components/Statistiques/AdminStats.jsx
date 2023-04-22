import React from 'react'
import '../../styles/AdminStats.scss'

export default function AdminStats() {
    return (
        <div className="admin-stats">
            <h1>Tableau de bord - Statistiques</h1>

            <div class="filters">
                <h2>Filtres :</h2>
                <label for="period">Période :</label>
                <select id="period" name="period">
                    <option value="">Tous</option>
                    <option value="last_week">Dernière semaine</option>
                    <option value="last_month">Dernier mois</option>
                    <option value="last_year">Dernière année</option>
                </select>

                <label for="category">Catégorie :</label>
                <select id="category" name="category">
                    <option value="">Toutes</option>
                    <option value="category1">Catégorie 1</option>
                    <option value="category2">Catégorie 2</option>
                    <option value="category3">Catégorie 3</option>
                </select>

                <label for="relation_type">Type de relation :</label>
                <select id="relation_type" name="relation_type">
                    <option value="">Tous</option>
                    <option value="relation_type1">Type 1</option>
                    <option value="relation_type2">Type 2</option>
                    <option value="relation_type3">Type 3</option>
                </select>

                <label for="resource_type">Type de ressource :</label>
                <select id="resource_type" name="resource_type">
                    <option value="">Tous</option>
                    <option value="resource_type1">Type 1</option>
                    <option value="resource_type2">Type 2</option>
                    <option value="resource_type3">Type 3</option>
                </select>

                <label for="geographical_zone">Zone géographique :</label>
                <select id="geographical_zone" name="geographical_zone">
                    <option value="">Toutes</option>
                    <option value="zone1">Zone 1</option>
                    <option value="zone2">Zone 2</option>
                    <option value="zone3">Zone 3</option>
                </select>

                <button id="filter_button">Filtrer</button>
            </div>

            <div class="stats">
                <h2>Statistiques :</h2>
                <table>
                    <tr>
                        <th>Période</th>
                        <th>Catégorie</th>
                        <th>Type de relation</th>
                        <th>Type de ressource</th>
                        <th>Zone géographique</th>
                        <th>Statistique 1</th>
                        <th>Statistique 2</th>
                        <th>Statistique 3</th>
                    </tr>
                    <tr>
                        <td>Janvier 2023</td>
                        <td>Catégorie 1</td>
                        <td>Type 1</td>
                        <td>Type 1</td>
                        <td>Zone 1</td>
                        <td>100</td>
                        <td>50</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Février 2023</td>
                        <td>Catégorie2</td>
                        <td>Type 2</td>
                        <td>Type 1</td>
                        <td>Zone 2</td>
                        <td>75</td>
                        <td>30</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Mars 2023</td>
                        <td>Catégorie 3</td>
                        <td>Type 3</td>
                        <td>Type 2</td>
                        <td>Zone 3</td>
                        <td>50</td>
                        <td>20</td>
                        <td>5</td>
                    </tr>
                </table>

            </div>
            <div class="export">
                <h2>Exporter :</h2>
                <p>Les statistiques peuvent être exportées dans un format défini à des fins d'exploitation ultérieures.</p>
                <button id="export_button">Exporter</button>
            </div>

        </div>
    )
}
