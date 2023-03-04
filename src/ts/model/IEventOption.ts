export default interface IEventOption {
	text: string,
	cost?: number,
	action?: () => void
}