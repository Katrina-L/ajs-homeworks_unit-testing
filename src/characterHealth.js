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

export default function characterHealth({health}) {
    const characterStateHealthy = characterState.healthy.health;
    const characterStateWounded = characterState.wounded.health;
    if (health >= characterStateHealthy) {
        return "healthy";
    }
    if (health >= characterStateWounded) {
        return "wounded";
    }
    return "critical";
}
