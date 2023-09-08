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
    if (health >= characterState.healthy.health) {
        return "healthy";
    }
    if (health >= characterState.wounded.health) {
        return "wounded";
    }
    return "critical";
}
