export default function characterSort(characterInaformation) {
    return characterInaformation.sort( (a, b) => b.health - a.health );
}