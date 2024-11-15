
import { Header } from '@components/Header'
import { Container } from './styles'
import { Card } from '@components/Card'
import { View, SectionList } from 'react-native'
import { Typography } from '@components/Typography'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { Meal } from '@components/Meal'


export function HomeScreen() {

    const meals = [
        {
            title: '12.08.23',
            data: [
                {
                    id: '01',
                    hour: '20:00',
                    description: 'X-tudo',
                    isOnTheDiet: false,
                },
            ],
        },
        {
            title: '11.08.23',
            data: [
                {
                    id: '02',
                    hour: '20:00',
                    description: 'Salada',
                    isOnTheDiet: true,
                },
                {
                    id: '03',
                    hour: '20:00',
                    description: 'Coca-Cola',
                    isOnTheDiet: true,
                },
            ],
        },
    ]
    return (
        <Container>
            <Header />
            <Card
                title='90,86%'
                subtitle='das refeições dentro da dieta'
                bg='green'
                iconPosition='right'
            />
            <View style={{ marginTop: 40 }}>
                <Typography
                    fontSize='title_sm'
                    style={{ marginBottom: 8 }}>
                    Refeições
                </Typography>
                <Button
                    title='Nova refeição'
                    icon={<Plus color='white' size={18} />}
                    isActive
                    onPress={() => console.log('Nova refeição')}
                    type='solid'
                />
            </View>

            <SectionList
                sections={meals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Meal
                    key={item.id} {...item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Typography
                        fontSize='title_sm'
                        fontFamily='bold'
                        color='gray_1'
                        style={{ marginBottom: 8, marginTop: 13 }}>
                        {title}
                    </Typography>
                )}
                style={{ marginBottom: 32 }}
                contentContainerStyle={
                    meals.length === 0 && {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }
                }
                ListEmptyComponent={() => (
                    <>
                        <Typography>
                            Não há refeições cadastradas ainda.
                        </Typography>
                        <Typography>
                            Vamos cadastrar refeições hoje?
                        </Typography>
                    </>
                )}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}
