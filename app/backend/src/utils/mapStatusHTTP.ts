export default function mapStatusHTTP(status: string): number {
    switch (status) {
        case 'SUCCESSFUL':
            return 200

        case 'CREATE': 
            return 201

        case 'NOT_FOUND':
            return 404

        case 'EXCLUDE':
            return 204
        default:
            return 500
    }
}