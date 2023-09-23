// сортировка персонажей по уровню здоровья (от большего к меньшему)
export default function characterSort(characterInformation) {
    const characterInformationOrdered = characterInformation;
    return characterInformationOrdered.sort( (a, b) => b.health - a.health );
}