#! /usr/bin/env node
import {program} from "commander";
import fs from 'node:fs';
import {resolve} from 'node:path'
const data = fs.readFileSync(resolve(process.cwd(), './package.json'), {encoding: 'utf-8'})
const {version} = JSON.parse(data)
// 查看版本
program.version(version)
// 自定义指令
program
    .command('create <project> [option]')
    .alias('ctr') // 命令别名
    .option('-r, --recursive', 'Remove recursively') // 定义command 中option的参数别名
    .description('create a new project') // 描述
    .action(function (d, otherD,cmd) { // 命名操作步骤
        console.log(d, otherD,cmd)
    })
program.parse(process.argv)