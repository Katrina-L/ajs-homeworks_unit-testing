const characterState = {
    healthy: {
        health: 50,
        color: "green"
    },
    wounded: {
        health: 15,
        color: "yellow"
    },
    critical: {
        color: "red"
    }
};

export default function characterHealth(character) {
    const characterStateHealthy = characterState.healthy.health;
    const characterStateWounded = characterState.wounded.health;
    if (character.health <= 0) {
        throw "invalid";
    }
    if (character.health >= characterStateHealthy) {
        return "healthy";
    }
    if (character.health >= characterStateWounded) {
        return "wounded";
    }
    return "critical";
}
