import { Layout } from '@components/Layout'
import { Container, Row } from './styles'
import { Card } from '@components/Card'
import { Typography } from '@components/Typography'

export function StatisticsScreen() {
    return (
        <Container>
            <Layout
                bg="green"
                header={
                    <Card
                        bg='green'
                        title='90,86%'
                        subtitle='das refeições dentro da dieta'
                        iconPosition='left'
                        onPress={() => console.log('voltar')}
                    />
                }
            >
                <Typography
                    fontFamily='bold'
                    fontSize='title_xs'
                    style={{ marginBottom: 20 }}
                >
                    Estatísticas Gerais
                </Typography>
                <Row>
                    <Card
                        bg='gray'
                        title='22'
                        subtitle='melhor sequência de pratos dentro da dieta'
                        showIconButton={false}
                    />
                </Row>
                <Row>
                    <Card
                        bg='gray'
                        title='109'
                        subtitle='refeições registradas'
                        showIconButton={false}
                    />
                </Row>
                <Row>
                    <Card
                        bg='green'
                        title='99'
                        subtitle='refeições dentro da dieta'
                        showIconButton={false}
                        style={{ width: '48%' }}
                    />
                    <Card
                        bg='red'
                        title='10'
                        subtitle='refeições fora da dieta'
                        showIconButton={false}
                        style={{ width: '48%' }}
                    />
                </Row>

            </Layout>
        </Container>
    )
}
