import { Page,Locator } from '@playwright/test';

export class DefaultPage{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    getById(locator:string){
        return this.page.locator(`#${locator}`);
    }

    getByName(locator:string){
        return this.page.locator(`[name="${locator}"]`)
    }

    getByClass(locator:string){
        return this.page.locator(`.${locator}`);
    }

    getByXpath(locator:string){
        return this.page.locator(`xpath=${locator}`);
    }

    getByLinkText(text:string){
        return this.page.locator('a',{ hasText: `${text}`});
    }

    selectDropdown(locator:Locator, value:string | null){
        return locator.selectOption(value);
    }

    getFirstOptionValueFromDropdown(dropdown: Locator){
        const firstOption = dropdown.locator('option:not([value=""])').first();
        return firstOption.getAttribute('value');
    }
}