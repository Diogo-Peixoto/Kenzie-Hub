import styled from "styled-components";

const DashboardStyle = styled.div`
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    background-color: var(--grey-4);
    min-height: 100vh;

    main{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 63px;

        h2,h3,h4{
            color: var(--grey-0);
        }

        p{
            color: var(--grey-1);
            font-size: 0.599rem;
            font-weight: 400;
            line-height: 1.099rem;
        }

        section{
            display: flex;
            flex-direction: column;
            gap: 28px;

            width: 100%;

            & > div{
                display: flex;
                justify-content: space-between;

                & > svg{
                    color: white;
                    background-color: var(--grey-3);
                    width: 33px;
                    height: 32px;
                    border-radius: 4px;

                    cursor: pointer;
                }
            }


        }
    }

`

export const UlStyle = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;

    background-color: #212529;
    padding: 23px 26px 24px 22px;
    border-radius: 4px;

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: #121214;
        padding: 22px 13px 25px 13px;
        border-radius: 4px;

        div{
            display: flex;
            align-items: center;
            gap: 25px;

            svg{
                height: 15px;
                width: 15px;
                color: white;

                cursor: pointer;
            }
        }

        :hover{
            background-color: #343B41;
            
            p{
                color: white;
            }
        }
    }
`


export default DashboardStyle;