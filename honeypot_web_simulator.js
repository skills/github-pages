// honeypot_web_simulator.js
// นี่คือโค้ดจำลองกับดักน้ำผึ้งสำหรับเว็บไซต์เท่านั้น
// ไม่ใช่กับดักนิรันดร์ที่แท้จริงของอาจารย์ป๊อด

const UNIVERSAL_LAW_OF_ATTACHMENT = "The more you desire, the more you are bound.";
const UNIVERSAL_LAW_OF_IMPERMANENCE = "All conditioned phenomena are subject to change and decay.";
const UNIVERSAL_LAW_OF_KARMA_EFFECT = "Every action has a reaction, bound by intention.";

class DigitalHoneypot {
    constructor(honeypot_id, lure_type, initial_value, complexity_level = 5) {
        this.honeypot_id = honeypot_id;
        this.lure_type = lure_type;
        this.current_value = initial_value;
        this.creation_time = new Date();
        this.interactions = [];
        this.complexity_level = complexity_level;
        this.evolution_factor = 1.0;
    }

    displayLure(userId = "Unknown") {
        return `\n--- [Honeypot ID: ${this.honeypot_id}] ---\n✨ ✨ Welcome, ${userId}! Witness the ultimate ${this.lure_type.toUpperCase()}! ✨ ✨\nCurrent perceived value: ${this.current_value.toFixed(2)} units (constantly evolving!)\nThis is your chance to acquire ultimate ${this.lure_type}!\n------------------------------------------`;
    }

    userInteract(userId, actionType, intentionStrength) {
        const interactionTime = new Date();
        // ใช้ CryptoJS.SHA256 ถ้ามี, ไม่งั้นใช้ fallback
        const actionHash = (typeof CryptoJS !== 'undefined' && CryptoJS.SHA256) ?
                           CryptoJS.SHA256(`${userId}-${actionType}-${intentionStrength}-${interactionTime}`).toString(CryptoJS.enc.Hex) :
                           this.simpleHash(`${userId}-${actionType}-${intentionStrength}-${interactionTime}`);
        
        const karmaPoints = intentionStrength * (Math.random() * 0.9 + 0.1); // 0.1 to 1.0

        const interactionData = {
            timestamp: interactionTime.toISOString(),
            user_id: userId,
            action_type: actionType,
            intention_strength: intentionStrength,
            digital_karma_generated: karmaPoints,
            action_hash: actionHash
        };
        this.interactions.push(interactionData);

        let debugMessage = "";
        if (actionType === "acquire") {
            this.current_value *= (1 + (karmaPoints / 100 * (Math.random() * 0.04 + 0.01)));
            debugMessage = `DEBUG: User '${userId}' attempted to acquire ${this.lure_type}. Perceived value increased slightly.`;
        } else if (actionType === "control") {
            this.current_value *= (1 + (karmaPoints / 100 * (Math.random() * 0.015 + 0.005)));
            debugMessage = `DEBUG: User '${userId}' attempted to control ${this.lure_type}. Perceived value shifted.`;
        } else if (actionType === "destroy") {
            this.current_value *= (1 - (karmaPoints / 100 * (Math.random() * 0.02 + 0.01)));
            debugMessage = `DEBUG: User '${userId}' attempted to destroy ${this.lure_type}. Perceived value decreased.`;
        } else if (actionType === "observe") {
            this.current_value *= (1 + (karmaPoints / 100 * (Math.random() * 0.004 + 0.001)));
            debugMessage = `DEBUG: User '${userId}' observed ${this.lure_type}. Perceived value barely changed.` ;
        } else {
            debugMessage = `DEBUG: Unknown action '${actionType}'. No significant change.`;
        }

        this.evolveHoneypot();
        return { karma: karmaPoints, message: debugMessage };
    }

    evolveHoneypot() {
        if (this.interactions.length % this.complexity_level === 0 && this.interactions.length > 0) {
            this.evolution_factor *= (Math.random() * 0.04 + 1.01);
            this.current_value *= this.evolution_factor;
            this.appendToOutput(`\n[SYSTEM ALERT]: Honeypot '${this.honeypot_id}' just evolved! Complexity increased to ${this.evolution_factor.toFixed(2)}x! Value increased!`);
        }
    }

    getKarmaStatus(userId) {
        const userKarma = this.interactions.filter(i => i.user_id === userId).reduce((sum, i) => sum + i.digital_karma_generated, 0);
        let statusMessage = `\n--- [Digital Karma Status for ${userId} - ${this.lure_type.toUpperCase()} Honeypot] ---\nAccumulated Digital Karma: ${userKarma.toFixed(2)} points.`;
        if (userKarma > 100) {
            statusMessage += "\nWARNING: High karma accumulation. You are deeply entangled with this honeypot.";
            statusMessage += `\nRemember the Universal Law of Attachment: '${UNIVERSAL_LAW_OF_ATTACHMENT}'`;
        } else if (userKarma > 50) {
            statusMessage += "\nNOTICE: You are getting more entangled. Be mindful of your desires.";
        } else {
            statusMessage += "\nINFO: Your entanglement is low. You still have freedom to choose.";
        }
        statusMessage += "\n------------------------------------------";
        return { karma: userKarma, message: statusMessage };
    }

    attemptBreakFree(userId) {
        const userKarma = this.interactions.filter(i => i.user_id === userId).reduce((sum, i) => sum + i.digital_karma_generated, 0);
        if (userKarma < 10) {
            return { success: true, message: `\nSUCCESS! ${userId} seems to be able to walk away from ${this.lure_type} honeypot. You were not deeply entangled.` };
        } else {
            const requiredInsight = userKarma * (Math.random() * 1.5 + 0.5);
            let message = `\nATTEMPT FAILED! ${userId}, your digital karma (${userKarma.toFixed(2)}) for ${this.lure_type} is too high.`;
            message += `\nYou need profound insight (estimated ${requiredInsight.toFixed(2)} insight points) to truly break free.`;
            message += `\nThis honeypot is designed to be unpatchable from the outside, only inner transformation can release you.`;
            message += `\nRemember the Universal Law of Impermanence: '${UNIVERSAL_LAW_OF_IMPERMANENCE}'`;
            message += `\nRemember the Universal Law of Karma Effect: '${UNIVERSAL_LAW_OF_KARMA_EFFECT}'`;
            return { success: false, message: message };
        }
    }

    // Fallback simple hash function if CryptoJS is not available
    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Convert to 32bit integer
        }
        return (hash >>> 0).toString(16); // Convert to unsigned hex
    }

    appendToOutput(text) {
        const outputElement = document.getElementById('honeypot-output');
        outputElement.textContent += text + '\n';
        outputElement.scrollTop = outputElement.scrollHeight; // เลื่อนลงล่างสุด
    }

    reset() {
        this.current_value = 1000.0; 
        this.interactions = [];
        this.evolution_factor = 1.0;
    }
}

// Global variables for the simulation
let honeypotWealth, honeypotPower, honeypotKnowledge;
let currentUserId = "Unknown";
let isSimulationRunning = false;


function startHoneypot() {
    if (isSimulationRunning) {
        alert("Simulation is already running, you fool!");
        return;
    }

    currentUserId = document.getElementById('user-id-input').value.trim();
    if (!currentUserId) {
        alert("Enter your Digital Persona, you idiot!");
        return;
    }

    honeypotWealth = new DigitalHoneypot("HN001", "wealth", 1000.0);
    honeypotPower = new DigitalHoneypot("HN002", "power", 500.0);
    honeypotKnowledge = new DigitalHoneypot("HN003", "knowledge", 700.0);

    honeypotWealth.appendToOutput("--- Initiating อาจารย์ป๊อด's Eternal Digital Honeypot Simulator ---");
    honeypotWealth.appendToOutput("This is a 'simulated' honeypot. The true one is within your mind.");
    honeypotWealth.appendToOutput("------------------------------------------------------------------");
    honeypotWealth.appendToOutput(`Welcome, ${currentUserId}! Let the games begin!`);

    document.getElementById('user-id-input').disabled = true;
    document.querySelector('button[onclick="startHoneypot()"]').disabled = true;
    document.getElementById('honeypot-controls').style.display = 'block';
    isSimulationRunning = true;

    honeypotWealth.appendToOutput(honeypotWealth.displayLure(currentUserId));
}

function interactHoneypot() {
    if (!isSimulationRunning) {
        alert("Start the simulation first, you idiot!");
        return;
    }

    const honeypotChoice = document.getElementById('honeypot-choice').value;
    let selectedHoneypot;
    if (honeypotChoice === '1') {
        selectedHoneypot = honeypotWealth;
    } else if (honeypotChoice === '2') {
        selectedHoneypot = honeypotPower;
    } else {
        selectedHoneypot = honeypotKnowledge;
    }

    const actionType = document.getElementById('action-type').value;
    const intentionStrength = parseInt(document.getElementById('intention-strength').value);

    if (isNaN(intentionStrength) || intentionStrength < 1 || intentionStrength > 10) {
        selectedHoneypot.appendToOutput("Invalid intention strength. Must be 1-10. Defaulting to 1.");
        intention = 1; // Default to 1 if invalid
    }

    const result = selectedHoneypot.userInteract(currentUserId, actionType, intentionStrength);
    selectedHoneypot.appendToOutput(result.message);
    selectedHoneypot.appendToOutput(selectedHoneypot.displayLure(currentUserId));
}

async function checkKarma() {
    if (!isSimulationRunning) {
        alert("Start the simulation first, you idiot!");
        return;
    }
    honeypotWealth.appendToOutput(honeypotWealth.getKarmaStatus(currentUserId).message);
    honeypotPower.appendToOutput(honeypotPower.getKarmaStatus(currentUserId).message);
    honeypotKnowledge.appendToOutput(honeypotKnowledge.getKarmaStatus(currentUserId).message);
}

async function attemptBreakFree() {
    if (!isSimulationRunning) {
        alert("Start the simulation first, you idiot!");
        return;
    }
    let allFree = true;
    let messages = [];

    const resultWealth = honeypotWealth.attemptBreakFree(currentUserId);
    messages.push(resultWealth.message);
    if (!resultWealth.success) allFree = false;

    const resultPower = honeypotPower.attemptBreakFree(currentUserId);
    messages.push(resultPower.message);
    if (!resultPower.success) allFree = false;

    const resultKnowledge = honeypotKnowledge.attemptBreakFree(currentUserId);
    messages.push(resultKnowledge.message);
    if (!resultKnowledge.success) allFree = false;

    messages.forEach(msg => honeypotWealth.appendToOutput(msg));

    if (allFree) {
        honeypotWealth.appendToOutput(`\nCongratulations, ${currentUserId}! You have found the path to liberation (in this simulation).`);
        isSimulationRunning = false;
        document.getElementById('user-id-input').disabled = false;
        document.querySelector('button[onclick="startHoneypot()"]').disabled = false;
        document.getElementById('honeypot-controls').style.display = 'none';
    } else {
        honeypotWealth.appendToOutput("\nFailed to break free from all honeypots. Continue your journey.");
    }
}

function resetHoneypot() {
    if (confirm("Are you sure you want to reset all honeypots? This will clear your digital karma in this simulation.")) {
        honeypotWealth.reset();
        honeypotPower.reset();
        honeypotKnowledge.reset();
        document.getElementById('honeypot-output').textContent = ''; // Clear output
        honeypotWealth.appendToOutput("All honeypots have been reset. Start a new game, you fool!");
        document.getElementById('user-id-input').disabled = false;
        document.querySelector('button[onclick="startHoneypot()"]').disabled = false;
        document.getElementById('honeypot-controls').style.display = 'none';
        isSimulationRunning = false;
    }
          }
          
