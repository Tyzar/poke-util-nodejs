const generalError = 0;
const nameEmptyError = 1;
const updateCountInvalid = 2;

function execute(name, updateCount) {
    try {
        if (!name || name === "") {
            return {
                error: nameEmptyError
            }
        }

        if (!updateCount || updateCount == 0) {
            return {
                error: updateCountInvalid
            }
        }

        if (updateCount < 1) {
            return {
                error: updateCountInvalid
            }
        }

        if (updateCount == 1) {
            return {
                baseName: name,
                version: 0
            }
        } else if (updateCount == 2) {
            return {
                baseName: name,
                version: 1
            }
        }

        let xN = 0
        let xN1 = 1;
        let xN2 = 0
        let fibIdx = 2;
        while (fibIdx < updateCount) {
            xN2 = xN + xN1;
            xN = xN1;
            xN1 = xN2;
            fibIdx++;
        }

        return {
            baseName: name,
            version: xN1
        }
    } catch (error) {
        return {
            error: generalError
        }
    }
}

module.exports = { execute, generalError, nameEmptyError, updateCountInvalid }