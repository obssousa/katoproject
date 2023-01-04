<template>
    <div class="content">
        <el-row class="description" justify="center">
            <div class="circle">
                <div class="column">
                    <el-popover
                        placement="top"
                        title="Primeiro mandamento"
                        :width="200"
                        trigger="hover"
                        content="Esforçar-se para a formação do caráter."
                    >
                        <template #reference>
                            <component class="kanjin" :is="isMobile ? 'h5' : 'h3'">
                                一、人格完成に努むること
                            </component>
                        </template>
                    </el-popover>
                </div>
                <div class="column">
                    <el-popover
                        placement="top"
                        title="Segundo mandamento"
                        :width="200"
                        trigger="hover"
                        content="Fidelidade para com o verdadeiro caminho da razão."
                    >
                        <template #reference>
                            <component class="kanjin" :is="isMobile ? 'h5' : 'h3'">
                                一、誠の道を守ること
                            </component>
                        </template>
                    </el-popover>
                </div>
                <div class="column">
                    <el-popover
                        placement="top"
                        title="Terceiro mandamento"
                        :width="200"
                        trigger="hover"
                        content="Criar o intuito de esforço."
                    >
                        <template #reference>
                            <component class="kanjin" :is="isMobile ? 'h5' : 'h3'">
                                一、努力の精神を養うこと
                            </component>
                        </template>
                    </el-popover>
                </div>
                <div class="column">
                    <el-popover
                        placement="top"
                        title="Quarto mandamento"
                        :width="200"
                        trigger="hover"
                        content="Respeito acima de tudo."
                    >
                        <template #reference>
                            <component class="kanjin" :is="isMobile ? 'h5' : 'h3'">
                                一、礼儀を重んずること
                            </component>
                        </template>
                    </el-popover>
                </div>
                <div class="column">
                    <el-popover
                        placement="top"
                        title="Quinto mandamento"
                        :width="200"
                        trigger="hover"
                        content="Conter o espírito de agressão."
                    >
                        <template #reference>
                            <component class="kanjin" :is="isMobile ? 'h5' : 'h3'">
                                一、血気の勇を戒むること
                            </component>
                        </template>
                    </el-popover>
                </div>
            </div>
        </el-row>
    </div>
</template>

<script setup>
import useDevice from '@/hooks/useDevice'

const { isMobile } = useDevice()

</script>

<style lang="scss" scoped>
@import '../../assets/variables.scss';
.content {
    padding: 20px 0;

    .description {
        .circle {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            align-content: center;
            border-radius: 50%;
            gap: $space4x;
            background-color: var(--el-color-primary);
            height: 500px;
            width: 500px;
            margin: 160px 0;

            &:hover {
                background: rgba(243, 119, 119, 0.9);
                -webkit-transition: all 0.2s, color 0.2s;
                -moz-transition: all 0.2s, color 0.2s;
                transition: all 0.2s, color 0.2s;
            }

            .column {
                .kanjin {
                    writing-mode: vertical-rl;
                    cursor: pointer;

                    &:hover {
                        text-shadow: 1px 1px 4px var(--el-color-black);
                    }
                }

                .text {
                    writing-mode: vertical-rl;
                    text-orientation: upright;
                }
            }
        }
    }
}

@media (max-width: 550px)
{
    .content {

        .description {
            .circle {
                gap: 11vw;
                min-width: 310px;
                height: 95vw;
                width: 100vw;
                max-width: 500px;
                max-height: 500px;
                margin: 100px $space 60px;
            }

            .kanjin {
                margin: 0px;
            }
        }
    }
}
</style>
