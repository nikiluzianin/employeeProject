
export default function useEmployeeStatus(startDate) {
    const timeWorking = (((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24 * 365)));

    const isProbation = timeWorking <= 0.5;
    const isAnniversary = timeWorking > 1 && Math.floor(timeWorking) % 5 == 0;

    return { timeWorking, isProbation, isAnniversary };
}